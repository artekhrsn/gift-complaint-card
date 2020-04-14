import React from "react";

const CheckboxList = (props) => {
  const input = props.reason.map((item) => (
    <div key={item.id}>
      <input type="checkbox" onChange={props.change} />
      <label>{item.name}</label>
    </div>
  ));
  return <div>{input}</div>;
};

export default CheckboxList;
