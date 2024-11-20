// import React from 'react';
// import { Form, InputGroup, Tooltip, OverlayTrigger } from 'react-bootstrap';
// import './Range.css'
// const RangeSlider = ({ value, onChange, min, max, step, label, unit }) => {
//   return (
//     <div className="mb-3 d-flex g-3">
//       <Form.Label className="fw-bold " style={{width:"60%"}}>{label}</Form.Label>
//       <InputGroup>
//         <OverlayTrigger
//           placement="top"
//           overlay={<Tooltip id={`${label.toLowerCase()}-tooltip`}>{value}{unit}</Tooltip>}
        
//        >
//           <Form.Range
//             value={value}
//             onChange={(e) => onChange(Number(e.target.value))}
//             min={min}
//             max={max}
//             step={step}
//             className="w-100"
//           />
//         </OverlayTrigger>
//         <InputGroup.Text>{value}{unit}</InputGroup.Text>
//       </InputGroup>
//     </div>
//   );
// };

// export default RangeSlider;



import React from 'react';
import { Form, InputGroup, Tooltip, OverlayTrigger } from 'react-bootstrap';
import './Range.css'

const RangeSlider = ({ value, onChange, min, max, step, label = '', unit }) => {
  return (
    <div className="mb-3 d-flex g-3">
      <Form.Label className="fw-bold" style={{ width: "60%" }}>{label}</Form.Label>
      <InputGroup>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id={`${label ? label.toLowerCase() : 'default'}-tooltip`}>{value}{unit}</Tooltip>}
        >
          <Form.Range
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            min={min}
            max={max}
            step={step}
            className="w-100"
          />
        </OverlayTrigger>
        <InputGroup.Text>{value}{unit}</InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default RangeSlider;
