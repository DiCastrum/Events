import { useState } from 'react'

const Forms = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [venue, setVenue] = useState('')
     

    const onSubmit = (e) => {
        e.preventDefault()

        if (!title || !date || !venue) {
        alert('Please fill the form')
        return
        }

        onAdd({ title, date, venue })

        setTitle('')
        setDate('')
        setVenue('')
    }

    return (
        <div className="form-inner-container">
        <form className='add-form' onSubmit={onSubmit}>
            <h1 className='form-container-title'>Create a new event</h1>
            <div className='form-control'>
            <label className='form-title'>TITLE</label>
            <input
                type='text'
                placeholder='Insert a title...'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <div className='form-control'>
            <label>DATE</label>
            <input
                type='datetime-local'
                min={new Date().toISOString().slice(0,16)}
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            </div>
            <div className='form-control'>
            <label>VENUE</label>
            <input
                type='text'
                placeholder='Insert a venue..'
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
            />
            </div>
    
            <input type='submit' value='Create' className='btn' />
        </form>
        </div>
    )
}

export default Forms
