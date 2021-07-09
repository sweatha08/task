import React from "react"
const List = (props) => {
  return (                         
    props.list.map((val, idx) => {
      let name = `name-${idx}`, year = `year-${idx}`, mark = `mark-${idx}`, rank = `rank-${idx}`, sheet= `sheet-${idx}`
      return (
        <tr key={val.index}>
          <td>
            <input type="text"  name="name" data-id={idx} id={name} className="form-control " />
          </td>
          <td>
            <input type="text"  name="year" id={year} data-id={idx} className="form-control " />
          </td>
          <td>
            <input type="text"  name="mark" id={mark} data-id={idx} className="form-control " />
          </td>
          <td>
            <input type="text"  name="rank" id={rank} data-id={idx} className="form-control " />
          </td>
          <td>
            <input type="file"  name="sheet" id={sheet} data-id={idx} />
          </td>
         
          <td>
            {
            idx===0?<button onClick={()=>props.add()}type="button">Add</button>
            : <button className="btn btn-danger" onClick={(() => props.delete(val))}>Delete</button>
            }
          </td>
        </tr >
      )
    })
  )
}
export default List;