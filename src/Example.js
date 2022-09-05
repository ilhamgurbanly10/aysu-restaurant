import './Example.scss';
import TestFunc from './Functions.js';

function Example() {
  return (
    <div className="example" onClick={TestFunc}>
      I am Example
    </div>  
  );
}

export default Example;