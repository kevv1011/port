import { useEffect, useRef, useState } from 'react';
import { identity } from '../data/portfolioData';

export default function useEmailCopy() {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState('');
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);

  async function copyEmail() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(identity.email);
      setCopied(true);
      setMessage('Email copied. Let’s build something good.');
    } catch {
      setCopied(false);
      setMessage(`Copy unavailable. Email me at ${identity.email}`);
    }
    timer.current = setTimeout(() => {
      setCopied(false);
      setMessage('');
    }, 3000);
  }
  return { copied, message, copyEmail };
}
