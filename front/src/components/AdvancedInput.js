import React from 'react';
import { Input } from 'antd';


const AdvancedInput = (label, onChange, maxLength) => ({
  render() {
    return (
      <div className="advanced-input">
        <div className="advanced-input-title">
          <label>{label}</label>
        </div>
        <div className="advanced-input-title">
          <Input
            onChange={onChange}
            maxLength={maxLength}
          />
        </div>
      </div>
    );
  }
})

export default AdvancedInput;