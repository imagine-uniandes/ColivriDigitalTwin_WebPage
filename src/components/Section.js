import React from 'react';
import Typography from '@mui/material/Typography';

const Section = ({ title, subtitle, children, variant = 'h3', centered = false, borderTop = false, boldTitle = false }) => {
  const titleStyle = centered ? { textAlign: 'center' } : {};
  const borderTopStyle = borderTop ? { borderTop: '1px solid #ddd' } : {};
  const fontWeightStyle = boldTitle ? { fontWeight: 'bold' } : {};

  return (
    <div style={{ marginBottom: '20px', paddingTop: '20px', ...borderTopStyle }}>
      <Typography variant={variant} gutterBottom style={{ ...titleStyle, ...fontWeightStyle }}>
        {title}
      </Typography>
      {subtitle && <Typography>{subtitle}</Typography>}
      {children}
    </div>
  );
};

export default Section;
