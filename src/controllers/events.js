import { Event } from "../models/Event.js";

export const getEvents = async(req, res) => {
  try {
    const uid = req.uid;
    const events = await Event.find({'user':uid}).populate('user', 'name');
    res.status(200).json({
      ok: true,
      events,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Ha ocurrido un error!!!",
    });
  }
};
export const getEvent = (req, res) => {
  res.json({
    ok: true,
    msg: "createEvent",
  });
};
export const createEvent = async (req, res) => {
  const event = new Event(req.body);
  try {
    event.user = req.uid;
    const savedEvent = await event.save();
    res.status(200).json({
      ok: true,
      event: savedEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Ha ocurrido un error!!!",
    });
  }
};
export const updateEvent = async(req, res) => {
    const eventId = req.params.id
    try {
        const event = await Event.findById(eventId);
        if(!event){
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe con ese id'
            })
        }
        if(event.user.toString() !== req.uid){
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            })
        }
        const newEvent ={
            ...req.body,
            user: req.uid
        }
        const eventUpdated = await Event.findByIdAndUpdate(eventId, newEvent, {new: true})
        res.status(200).json({
            ok: true,
            eventUpdated
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Ha ocurrido un error'
        })
    }
};
export const deleteEvent = (req, res) => {
};
