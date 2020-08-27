import React from 'react';
import './styles.scss'
import MaskedInput from 'react-input-mask';


export default function AdvancedInput({
  label,
  onChange,
  placeholder,
  value,
  mask,
}) {
  return (
    <div className="advanced-input">
      <div className="advanced-input-title">
        <label>{label}</label>
      </div>
      <div className="advanced-input__input">
        <MaskedInput
          mask={mask}
          onChange={onChange}
          placeholder={placeholder}
          value={value || null}
        />
      </div>
    </div>
  )
};