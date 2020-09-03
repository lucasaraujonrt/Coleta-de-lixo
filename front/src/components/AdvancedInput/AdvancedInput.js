import React from 'react';
import './styles.css'
import MaskedInput from 'react-input-mask';


export default function AdvancedInput({
  label,
  onChange,
  placeholder,
  value,
  mask,
  size
}) {
  return (
    <div className="advanced-input">
      <label>{label}</label>
      <div className="input w100">
        <MaskedInput
          className="input w100"
          size={size}
          mask={mask}
          onChange={onChange}
          placeholder={placeholder}
          value={value || null}
        />
      </div>
    </div>
  )
};