import React from "react";
import { Label, Input } from "reactstrap";
//bu component checkbox olusturmak icin olusturuldu.
function Check({ changeFn, isChecked, value, label, name, className }) {
  //6tane prop alir.
  return (
    <Label className={className}>
      <Input
        type="checkbox"
        onChange={changeFn} //checkbox degistiginde tetiklenecek fonk
        name={name}
        value={value} //checkbox degeri
        checked={isChecked} //checkbox isaretli mi?
        className="checkbox" //checkbox css sinifi
      />
      {label}
    </Label>
  );
}
////checkbox metin etiketi (label)

export default Check;
