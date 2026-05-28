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
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | 'server-error'

  // ESC key to close success/error messages
  useState(() => {
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

    if (!formData.name || formData.name.length < 4) {
      newErrors.name = true;
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = true;
    }
    if (!formData.phone || !/^\+?\d{8,12}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = true;
    }
    if (!formData.subject || formData.subject.length < 5) {
      newErrors.subject = true;
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

  const handleSubmit = async () => {
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
        // Reset form
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

      // Auto-clear status messages after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  const isFormValid =
    formData.name.length >= 4 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    /^\+?\d{8,12}$/.test(formData.phone.replace(/[\s-]/g, '')) &&
    formData.subject.length >= 5;

  return (
    <div className={Styles.mainwrapper}>
      <div className={Styles.chidwrapper}>
        <div className={Styles.titleing}>
          <span className="section-subtitle">Start a Conversation</span>
          <h2 className="section-title">Inquiry Form</h2>
          <div className={Styles.description}>
            <p>Share your requirements and we will respond within 24 hours.</p>
          </div>
        </div>

        <div className={Styles.formmain}>
          <div className={Styles.Hormtitle}>
            <span>Send an Inquiry</span>
            <p>Fields marked with * are required</p>
          </div>

          <div className={Styles.inpfldgrp}>
            <input
              className={Styles.inpbox}
              type="text"
              placeholder="Full Name *"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
            <input
              className={Styles.inpbox}
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
            <input
              className={Styles.inpbox}
              type="tel"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
            />
            <input
              className={Styles.inpbox}
              type="text"
              placeholder="Subject / Product of Interest *"
              value={formData.subject}
              onChange={(e) => handleChange('subject', e.target.value)}
            />
            <textarea
              className={Styles.inpbox + ' ' + Styles.inpmsg}
              placeholder="Message / Additional Requirements"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
            />
          </div>

          <button
            className={`${Styles.submitbtn} ${!isFormValid ? Styles.nonbtn : ''}`}
            onClick={handleSubmit}
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
            {isSubmitting && (
              <div style={{ width: 18, height: 18 }}>
                <Lottie animationData={animationData} />
              </div>
            )}
          </button>

          {submitStatus === 'success' && (
            <div className={Styles.donesubmit}>✓ Your inquiry has been received. We will contact you shortly.</div>
          )}
          {submitStatus === 'error' && (
            <div className={Styles.errsubmit}>Please fill all required fields correctly.</div>
          )}
        </div>
      </div>
    </div>
  );
}
