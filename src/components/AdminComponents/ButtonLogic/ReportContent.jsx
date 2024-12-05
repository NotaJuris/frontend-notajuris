import React from 'react';
import Component from "./Component1";

function ReportContent(props){
  return (
    <div className="report-content">
      <Component atividades={props.atividades} indexButton={props.indexButton}/>
    </div>
  );
};

export default ReportContent;