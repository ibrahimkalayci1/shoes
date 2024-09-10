import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
type Props = {
  selected:string;
  setSelected:React.Dispatch<React.SetStateAction<string>>;
}


const Gender = ({selected, setSelected} : Props ) => {

const [params, setParams] = useSearchParams();

useEffect(() => {
  if(selected) {
    params.set("gender", selected);
  } else {
    params.delete("gender")
  }

  setParams(params);
}, [selected] )

  return (
    <div>
      <h2 className='mb-4'>Cinsiyet</h2>

<div className='flex items-center gap-3'>
  <input 
  checked= {params.get("gender")  === "men" }
  onClick={()  => setSelected("men") }
  name="gen"  
  type="radio" 
  id='men' />
  <label htmlFor="men">Erkek</label>
</div>

<div className='flex items-center gap-3'>
  <input 
    checked= {params.get("gender")  === "women" }

  onClick={() => setSelected("women") }
  name="gen" 
  type="radio" 
  id='women' />
  <label htmlFor="women">Kadın</label>
</div>

    </div>
  )
}

export default Gender