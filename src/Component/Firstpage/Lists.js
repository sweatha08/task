import React from "react"
const Lists = (props) => {
  return (                        
    props.lists.map((val, idx) => {
      let period = `period-${idx}`, name = `name-${idx}`, address = `address-${idx}`, place= `place-${idx}`, responsibility= `responsibility-${idx}`, ctc= `ctc-${idx}`, up= `up-${idx}`
      return (
        <tr key={val.index} >
          <td>
            <input type="date"  name="period" data-id={idx} id={period} style={{width:"157px"}} />
            <br/><br/>
            <input type="date"  name="period" data-id={idx} id={period} style={{width:"157px"}}  />
          </td>
          <td>
            <input type="text"  name="name" data-id={idx} id={name} style={{width:"157px"}} />
          </td>
          <td>
            <input type="text"  name="address" id={address} data-id={idx} style={{width:"157px"}} />
          </td>
         
          <td>
            <input type="text"  name="place" id={place} data-id={idx} style={{width:"157px"}} />
          </td>
          <td>
            <input type="text"  name="responsibility" id={responsibility} data-id={idx} style={{width:"157px"}} />
          </td>
          <td>
            <input type="date"  name="ctc" id={ctc} data-id={idx}  placeholder="starting date" style={{width:"157px"}}/>
            <br/><br/>
            <input type="date"  name="ctc" id={ctc} data-id={idx}  placeholder="Leaving Date" style={{width:"157px"}}/>
          </td>
          <td><input type="file" name="up" id={up} data-id={idx} style={{width:"155px"}}></input></td>
         
          <td>
            {
            idx===0?<button onClick={()=>props.add()}type="button" style={{paddingLeft:"5px"}}>➕</button>
            : <button className="btn btn-danger" onClick={(() => props.delete(val))}>➖</button>
            }
          </td>
        </tr >
      )
    })
  )
}
export default Lists;