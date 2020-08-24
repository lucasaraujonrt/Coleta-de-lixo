import React from 'react';
import { Input } from 'antd';


export default function AdvancedInput({
  label,
  onChange,
  placeholder,
  maxLength,
  value
}) {
  return (
    <div className="advanced-input">
      <div className="advanced-input-title">
        <label>{label}</label>
      </div>
      <div className="advanced-input-title">
        <Input
          onChange={onChange}
          maxLength={maxLength}
          placeholder={placeholder}
          value={value || null}
        />
      </div>
    </div>
  )
};