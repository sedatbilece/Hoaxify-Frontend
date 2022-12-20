import React from "react";



const Input = (props) =>{
 const {name,label,error,onChanged,value,type,defaultValue} = props;
    return (
<div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                       {label}
      </label>
    </div>
    <div class="md:w-2/3">
      <input name={name} onChange={onChanged} className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4
       text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-300"  type={type} value={value} defaultValue={defaultValue}/>
        <p class="mt-2 text-sm text-red-600 dark:text-red-500 "> {error}</p>
    </div>
  </div>
    )

}
export default Input;