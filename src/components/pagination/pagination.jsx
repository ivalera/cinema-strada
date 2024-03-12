import './pagination.css'

export default function Pagination(){
  return(
    <div className='pagination'>
      <ul className='pagination__list'>
        <li>{'<'}</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>{'>'}</li>
      </ul>
    </div>
  )
}