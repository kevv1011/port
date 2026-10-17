import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

const storageKey = 'jr-inventory-simulator-stock';
const initialStock = 24;

export default function StockSimulator({ offline, onModeChange }) {
  const [cloudStock, setCloudStock] = useState(initialStock);
  const [localStock, setLocalStock] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === null) return initialStock;
      const parsed = Number(saved);
      return Number.isSafeInteger(parsed) && parsed >= 0 ? parsed : initialStock;
    } catch { return initialStock; }
  });
  const [log, setLog] = useState([offline ? 'Ready. Local inventory loaded from this browser.' : 'Ready. Cloud API simulation selected.']);
  const [saving, setSaving] = useState(false);
  const timer = useRef();
  const generation = useRef(0);
  useEffect(() => () => clearTimeout(timer.current), []);
  const stock = offline ? localStock : cloudStock;

  function record(message) {
    setLog(previous => [message, ...previous].slice(0, 3));
  }
  function switchMode() {
    clearTimeout(timer.current);
    generation.current += 1;
    setSaving(false);
    onModeChange();
    record(offline ? 'Cloud simulation selected. Separate demo data loaded.' : 'Offline fallback selected. Local inventory restored.');
  }
  function adjustStock(delta) {
    const next = Math.max(0, Math.min(9999, stock + delta));
    if (next === stock) return;
    if (offline) {
      setLocalStock(next);
      try {
        localStorage.setItem(storageKey, String(next));
        record(`Stock → ${next}. Optimistic update saved to localStorage.`);
      } catch {
        record(`Stock → ${next}. Browser storage unavailable; kept in memory.`);
      }
    } else {
      setCloudStock(next);
      setSaving(true);
      record(`Stock → ${next}. UI updated immediately; simulated request pending.`);
      clearTimeout(timer.current);
      const requestGeneration = ++generation.current;
      timer.current = setTimeout(() => {
        if (generation.current !== requestGeneration) return;
        setSaving(false);
        record(`Stock ${next} confirmed by simulated API (450 ms).`);
      }, 450);
    }
  }

  return <section className="stock-simulator" aria-labelledby="simulator-title">
    <div className="simulator-header">
      <div><span className="mono-label">Try the workflow</span><h3 id="simulator-title">Same stock controls. Either connection.</h3></div>
      <Icon name="terminal" size={20} />
    </div>
    <button className="simulator-mode" type="button" role="switch" aria-checked={offline} aria-label="Use offline localStorage fallback" onClick={switchMode}>
      <span><Icon name={offline ? 'database' : 'globe'} size={16} />{offline ? 'Offline · localStorage' : 'Online · Neon API simulation'}</span>
      <span className={`toggle-track ${offline ? 'toggled' : ''}`}><i /></span>
    </button>
    <div className="simulator-product"><div><strong>Lucky Me! Pancit Canton</strong><span>Sample inventory · Instant stock updates</span></div><div className="simulator-stepper"><button type="button" aria-label="Decrease case study stock" disabled={stock === 0} onClick={() => adjustStock(-1)}>−</button><output aria-label="Sample item stock">{stock}</output><button type="button" aria-label="Increase case study stock" disabled={stock === 9999} onClick={() => adjustStock(1)}>+</button></div></div>
    <p className="simulator-state" role="status"><i className="status-dot" />{saving ? 'Saving through simulated API…' : offline ? 'Offline fallback ready' : 'Simulated API ready'}</p>
    <ol className="simulator-log" aria-label="Recent stock events" aria-live="polite" aria-relevant="additions text">{log.map((entry, index) => <li key={`${entry}-${index}`}><span aria-hidden="true">›</span>{entry}</li>)}</ol>
    <p className="simulator-note">Offline changes persist in this browser. Cloud mode is simulated; the two demo inventories are separate.</p>
  </section>;
}
