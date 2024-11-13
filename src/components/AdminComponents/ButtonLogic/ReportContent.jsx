import React from 'react';

const RenderComponent = ({ index, components }) => {
  const Component = components[index];
  return Component ? <Component /> : null;
};

const ReportContent = ({ index, components }) => {
  return (
    <div className="report-content">
      <RenderComponent index={index} components={components} />
    </div>
  );
};

export default ReportContent;