import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TicketPage = () => {
    const [formData, setFormData] = useState({
        status: 'not started',
        progress: 0,
        timestamp: new Date().toISOString()
    })

    const editMode = false

    const navigate = useNavigate()

    //handles form event
     const handleSubmit = async(e) => {
        e.preventDefault()

        if(!editMode) {
            const response = await axios.post('http://localhost:8000/tickets',{
                formData
            })
            const success = response.status === 200
            if(success) {
                navigate('/')
            }
        }
    }

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        })
        )
    }

    const categories = ['test1', 'test2']

    console.log(formData)

    return (
        <div className="ticket">
            <h1>{editMode ? 'update your ticket' : 'create a ticket'}</h1>
            <div className="ticket-container">
                {/* submit form */}
                <form onSubmit ={handleSubmit}> 
                <section>
                    <label htmlFor="title">Title</label>
                    <input 
                        id='title'
                        name='title'
                        type='text'
                        onChange = {handleChange}
                        required={true}
                        value={FormData.title}/>

                    <label htmlFor="description">Description</label>
                    <input 
                        id='description'
                        name='description'
                        type='text'
                        onChange = {handleChange}
                        required={true}
                        value={FormData.description}/>

                        <label>Category</label>
                        <select
                        name='category'
                        value={formData.category}
                        onChange={handleChange}>
                           {categories?.map((category, _index) => (
                               <option key={_index} value={category}>{category}</option>
                           ))} 
                        </select>

                    <label htmlFor="new-category">New Category</label>
                    <input 
                        id='new-category'
                        name='new-category'
                        type='text'
                        onChange = {handleChange}
                        required={true}
                        value={FormData.category}
                        />

                        <label>Priority</label>
                        <div className='multiple-input-container'>
                            {/* option one */}
                            <input 
                            id='priority-1'
                            name='priority'
                            type='radio'
                            onChange={handleChange}
                            value={1}
                            checked={formData.priority == 1}/>
                            <label htmlFor='priority-1'>1</label>

                            {/* option two */}
                            <input 
                            id='priority-2'
                            name='priority'
                            type='radio'
                            onChange={handleChange}
                            value={2}
                            checked={formData.priority == 2}/>
                            <label htmlFor='priority-2'>2</label>

                            {/* option three */}
                            <input 
                            id='priority-3'
                            name='priority'
                            type='radio'
                            onChange={handleChange}
                            value={3}
                            checked={formData.priority == 3}/>
                            <label htmlFor='priority-3'>3</label>

                            {/* option four */}
                            <input 
                            id='priority-4'
                            name='priority'
                            type='radio'
                            onChange={handleChange}
                            value={4}
                            checked={formData.priority == 4}/>
                            <label htmlFor='priority-4'>4</label>

                            {/* option five */}
                            <input 
                            id='priority-5'
                            name='priority'
                            type='radio'
                            onChange={handleChange}
                            value={5}
                            checked={formData.priority == 5}/>
                            <label htmlFor='priority-5'>5</label>
                        </div>

                        {editMode && (
                            <>
                                <input
                                type="range"
                                id="progress"
                                name="progress"
                                value={formData.progress}
                                min="0"
                                max="100"
                                onChange={handleChange}
                                />
                                <label htmlFor="progress">Progress</label>

                                <label>Status</label>
                                <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                >
                                <option selected={formData.status == 'done'} value="done">
                                    Done
                                </option>
                                <option
                                    selected={formData.status == 'working on it'}
                                    value="working on it"
                                >
                                    Working on it
                                </option>
                                <option selected={formData.status == 'stuck'} value="stuck">
                                    Stuck
                                </option>
                                <option
                                    selected={formData.status == 'not started'}
                                    value="not started"
                                >
                                    Not Started
                                </option>
                                </select>
                            </>
                            )}
                            
                             <input type="submit" />
                            </section>        
                
                            <section>
                                <label htmlFor="owner">Owner</label>
                                <input
                                id="owner"
                                name="owner"
                                type="owner"
                                onChange={handleChange}
                                required={true}
                                value={formData.owner}
                                />

                                <label htmlFor="avatar">Avatar</label>
                                <input
                                id="avatar"
                                name="avatar"
                                type="url"
                                onChange={handleChange}
                                />
                                <div className="img-preview">
                                {formData.avatar && (
                                    <img src={formData.avatar} alt="avatar preview" />
                                )}
                                </div>
                            </section>
                     </form>
            </div>
        </div>
    )
}

export default TicketPage 