import React from 'react'
import Middlecont2 from './middlecont2'

const Middlecont = (props) => {
  return (
<>
      
    <div className='container' style={{backgroundColor:props.mode==='dark'?'#343a40':'white'}}>
      <div className="media">
  <img src="..." className="mr-3" alt="..."/>
  <div className="media-body">
    <h5 className="mt-0" style={{color:props.mode==='dark'?'white':'black'}}>Media heading</h5>
    <p style={{color:props.mode==='dark'?'white':'black'}}>Will you do the same for me? It's time to face the music I'm no longer your muse. Heard it's beautiful, be the judge and my girls gonna take a vote. I can feel a phoenix inside of me. Heaven is jealous of our love, angels are crying from up above. Yeah, you take me to utopia.</p>
  </div>
</div>



{/* <Middlecont2 
one = "this is my first component of list fck off now"/>





    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav> */}
    </div>

      </>
  )
}

export default Middlecont
