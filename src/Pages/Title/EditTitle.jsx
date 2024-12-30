import NavBar  from '../../Components/Nav/NavBar';
import { useState, useEffect } from "react";
import Input from '../../Components/Forms/Input';
import InputLabel from '../../Components/Forms/InputLabel';


export default function EditTitle() {

    const [title, setTitle] = useState('')
    const [firstname, setFirstname] = useState('')
    const [y, setY] = useState(0)

    

    useEffect(() => {
        document.title = title
    }, [title])

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            console.log('scroll')
            setY(window.scrollY)

            console.log(y)
        })
    }, [])

return (
    <>
        <NavBar />
    <div className='container mt-5'>
        <div className="col-4">
            <InputLabel
                htmlFor="title"
                className="form-label"
                label="Titre"
            />
            <Input
                className="form-control"
                type="text"
                name="title"
                id="title"
                placeholder="Modifier le titre" 
                value={title}
                // onChange={setTitle}
                onChange={(e) => setTitle(e.target.value)}
                
            />
        </div>
        <div className="col-4 mt-4">
            <InputLabel
                htmlFor="firstname"
                className="form-label"
                label="Prénom"
            />
            <Input
                className="form-control"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Prénom" 
                value={firstname}
                // onChange={setFirstname}
                onChange={(e) => setFirstname(e.target.value)}
            
            />
        </div>

        <div style={{ height: '300vh' }}>
            { y }
        </div>
    </div>
        
    </>
  )
}
