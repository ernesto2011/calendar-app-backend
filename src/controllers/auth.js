
export const createUser = (req, res) => {
    const user = req.body
    
    res.status(201).json({
        message: 'create user',
        ok: true,
        user
    })
}
export const loginUser = (req, res) => {
    const user = req.body
    
    res.status(200).json({
        message: 'login user',
        ok: true,
        user
    })
}
export const renewToken = (req, res) => {
    res.json({
        message: 'renew token',
        ok: true,
    })
}