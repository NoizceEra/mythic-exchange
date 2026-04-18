import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDownUp, 
  Settings, 
  Info, 
  ChevronDown, 
  ExternalLink, 
  Zap,
  Shield,
  BarChart3
} from 'lucide-react';

const App = () => {
  const [fromAmount, setFromAmount] = useState('10');
  const toAmount = '142.52';
  const [isSwapping, setIsSwapping] = useState(false);

  const handleSwap = () => {
    setIsSwapping(true);
    setTimeout(() => setIsSwapping(false), 2000);
  };

  return (
    <div className="app-container">
      <div className="bg-grid"></div>
      
      <nav>
        <div className="logo-container">
          <img src="/logo.svg" alt="Mythic" className="logo-img" />
          <div className="logo-text">
            MYTHIC<span className="logo-highlight">EXCHANGE</span>
          </div>
        </div>
        
        <div className="nav-links">
          <a href="#" className="active">Swap</a>
          <a href="#">Pools</a>
          <a href="#">Stake</a>
          <a href="#">Analytics</a>
        </div>

        <button className="wallet-btn">Connect Wallet</button>
      </nav>

      <main>
        <motion.div 
          className="hero"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Trade with <br /><span className="logo-highlight">Infinite</span> Liquidity.</h1>
          <p>
            Mythic Exchange aggregates across all L2 pools and bonding curves to find 
            you the most efficient execution on Mythic Network.
          </p>

          <div className="stats-grid">
            <div className="stat-item">
              <h3>$1.2B</h3>
              <p>Total Volume</p>
            </div>
            <div className="stat-item">
              <h3>24ms</h3>
              <p>Best Routing</p>
            </div>
            <div className="stat-item">
              <h3>0%</h3>
              <p>Price Impact</p>
            </div>
          </div>

          <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <Zap size={16} color="var(--primary)" /> Smart Routing
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <Shield size={16} color="var(--primary)" /> MEV Protection
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <BarChart3 size={16} color="var(--primary)" /> Depth Analysis
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="swap-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>
            Swap
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Settings size={20} className="text-muted" style={{ cursor: 'pointer' }} />
              <Info size={20} className="text-muted" style={{ cursor: 'pointer' }} />
            </div>
          </h2>

          <div className="token-input-container">
            <div className="token-input-header">
              <span>You Pay</span>
              <span>Balance: 42.06 SOL</span>
            </div>
            <div className="token-input-row">
              <input 
                type="text" 
                value={fromAmount} 
                onChange={(e) => setFromAmount(e.target.value)}
              />
              <div className="token-select">
                <img src="https://cryptologos.cc/logos/solana-sol-logo.png" width="20" alt="SOL" />
                SOL
                <ChevronDown size={16} />
              </div>
            </div>
          </div>

          <div className="swap-icon-container">
            <div className="swap-icon-btn">
              <ArrowDownUp size={18} />
            </div>
          </div>

          <div className="token-input-container">
            <div className="token-input-header">
              <span>You Receive (Estimated)</span>
              <span>Balance: 0.00 USDC</span>
            </div>
            <div className="token-input-row">
              <input 
                type="text" 
                value={toAmount} 
                readOnly
              />
              <div className="token-select">
                <img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png" width="20" alt="USDC" />
                USDC
                <ChevronDown size={16} />
              </div>
            </div>
          </div>

          <div className="quote-info">
            <div className="info-row">
              <span>Rate</span>
              <span>1 SOL ≈ 14.25 USDC</span>
            </div>
            <div className="info-row">
              <span>Slippage Tolerance</span>
              <span className="logo-highlight">0.5%</span>
            </div>
            <div className="info-row">
              <span>Best Route Found</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                Orca {'>'} Raydium {'>'} USDC <ExternalLink size={12} />
              </span>
            </div>
          </div>

          <button className="swap-btn" onClick={handleSwap}>
            {isSwapping ? 'Swapping...' : 'Swap Now'}
          </button>
        </motion.div>
      </main>

      <footer style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
        &copy; 2026 Mythic Exchange. Powered by Mythic L2.
      </footer>
    </div>
  );
};

export default App;
