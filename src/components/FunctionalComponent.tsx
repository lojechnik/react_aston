
import { nanoid } from 'nanoid'
export default function FunctionalComponent() {

    const arrayToRender = [{name: 'Владимир'},{name: 'Иван'},{name: 'Андрей'}]
  return (
    <>
    <ul>{
    arrayToRender.map(el=>{
        return (
            <li key = {nanoid()}>{el.name}</li>
        )
        })
}
</ul>
    </>
  )
}
