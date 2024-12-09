
export const getEvents = (req, res)=>{
    res.json({
        ok: true,
        msg: 'getEvents'
    })
}
export const getEvent = (req, res)=>{
    res.json({
        ok: true,
        msg: 'createEvent'
    })
}
export const createEvent = (req, res)=>{
    const {title, start, end} = req.body
    
    res.json({
        ok: true,
        msg: 'createEvent'
    })
}
export const updateEvent = (req, res)=>{
    res.json({
        ok: true,
        msg: 'updateEvent'
    })
}
export const deleteEvent = (req, res)=>{
    res.json({
        ok: true,
        msg: 'deleteEvent'
    })
}