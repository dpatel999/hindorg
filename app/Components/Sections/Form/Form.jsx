'use client';
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../../public/Assets/loading_6.json';
import Styles from './Form.module.css';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && submitStatus) {
        setSubmitStatus(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [submitStatus]);

  const validate = () => {
    const newErrors = {};

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = 'Please enter your full name';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.phone || !/^\+?\d{8,14}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (!formData.subject || formData.subject.length < 4) {
      newErrors.subject = 'Tell us the product or topic';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
    setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e?.preventDefault?.();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('server-error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
      }, 6000);
    }
  };

  const isFormValid =
    formData.name.length >= 3 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    /^\+?\d{8,14}$/.test(formData.phone.replace(/[\s-]/g, '')) &&
    formData.subject.length >= 4;

  return (
    <div className={Styles.mainwrapper}>
      <div className={Styles.chidwrapper}>
        <div className={Styles.layout}>
          <div className={Styles.titleing}>
            <span className="section-subtitle">Sales Desk</span>
            <h2 className="section-title">Request a Quote</h2>
            <div className="section-divider" />
            <p className={Styles.lead}>
              Share product, grade, quantity, and destination. Our team typically responds within 24
              business hours — faster for urgent plant requirements.
            </p>
            <ul className={Styles.points}>
              <li>High-purity & low-moisture grades</li>
              <li>Drums, bulk, and tanker loads</li>
              <li>Custom blends & private label</li>
              <li>Pan-India logistics support</li>
            </ul>
          </div>

          <form className={Styles.formmain} onSubmit={handleSubmit} noValidate>
            <div className={Styles.Hormtitle}>
              <span>Inquiry Form</span>
              <p>Fields marked with * are required</p>
            </div>

            <div className={Styles.inpfldgrp}>
              <div className={Styles.field}>
                <label htmlFor="ho-name">Full Name *</label>
                <input
                  id="ho-name"
                  className={`${Styles.inpbox} ${errors.name ? Styles.err : ''}`}
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  autoComplete="name"
                />
              </div>
              <div className={Styles.field}>
                <label htmlFor="ho-email">Email Address *</label>
                <input
                  id="ho-email"
                  className={`${Styles.inpbox} ${errors.email ? Styles.err : ''}`}
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  autoComplete="email"
                />
              </div>
              <div className={Styles.field}>
                <label htmlFor="ho-phone">Phone Number *</label>
                <input
                  id="ho-phone"
                  className={`${Styles.inpbox} ${errors.phone ? Styles.err : ''}`}
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  autoComplete="tel"
                />
              </div>
              <div className={Styles.field}>
                <label htmlFor="ho-subject">Product / Subject *</label>
                <input
                  id="ho-subject"
                  className={`${Styles.inpbox} ${errors.subject ? Styles.err : ''}`}
                  type="text"
                  placeholder="e.g. MDC 99%, 5 MT, Ahmedabad"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                />
              </div>
              <div className={`${Styles.field} ${Styles.full}`}>
                <label htmlFor="ho-message">Requirements</label>
                <textarea
                  id="ho-message"
                  className={`${Styles.inpbox} ${Styles.inpmsg}`}
                  placeholder="Grade, moisture limit, pack size, delivery location, timeline…"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  rows={4}
                />
              </div>
            </div>

            <button
              type="submit"
              className={`${Styles.submitbtn} ${!isFormValid ? Styles.nonbtn : ''}`}
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? 'Sending…' : 'Submit Inquiry'}
              {isSubmitting && (
                <div style={{ width: 18, height: 18 }}>
                  <Lottie animationData={animationData} />
                </div>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className={Styles.donesubmit} role="status">
                ✓ Your inquiry has been received. We will contact you shortly.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className={Styles.errsubmit} role="alert">
                Please fill all required fields correctly, or try again.
              </div>
            )}
            {submitStatus === 'server-error' && (
              <div className={Styles.srverrsubmit} role="alert">
                Server error. Please call +91 94270 50266 or email hindorg@gmail.com.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
