import React, { useState } from 'react';

interface OptimizerParams {
  bu: string;
  bo: string;
  H: string;
  tu: string;
  to: string;
  tw: string;
}

const Optimizer: React.FC = () => {
  const [params, setParams] = useState<OptimizerParams>({
    bu: '',
    bo: '',
    H: '',
    tu: '',
    to: '',
    tw: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Optimizer parameters:', params);
    // TODO: Add optimization logic here
  };

  return (
    <div className="optimizer-container">
      <div className="optimizer-form-section">
        <div className="form-container">
          <h2 className="form-title">Hat Profile Parameters</h2>
          <form onSubmit={handleSubmit} className="optimizer-form">
            <div className="form-group">
              <label htmlFor="bu" className="form-label">bu</label>
              <input
                type="number"
                id="bu"
                name="bu"
                value={params.bu}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter bu value"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label htmlFor="bo" className="form-label">bo</label>
              <input
                type="number"
                id="bo"
                name="bo"
                value={params.bo}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter bo value"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label htmlFor="H" className="form-label">H</label>
              <input
                type="number"
                id="H"
                name="H"
                value={params.H}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter H value"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label htmlFor="tu" className="form-label">tu</label>
              <input
                type="number"
                id="tu"
                name="tu"
                value={params.tu}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter tu value"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label htmlFor="to" className="form-label">to</label>
              <input
                type="number"
                id="to"
                name="to"
                value={params.to}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter to value"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label htmlFor="tw" className="form-label">tw</label>
              <input
                type="number"
                id="tw"
                name="tw"
                value={params.tw}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter tw value"
                step="0.01"
              />
            </div>

            <button type="submit" className="submit-button">
              Optimize Profile
            </button>
          </form>
        </div>
      </div>
      
      <div className="optimizer-results-section">
        <div className="results-container">
          <h3 className="results-title">Optimization Results</h3>
          <div className="results-placeholder">
            <p>Enter parameters and click "Optimize Profile" to see results.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Optimizer;