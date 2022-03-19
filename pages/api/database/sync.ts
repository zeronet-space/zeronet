import { dispatch } from '../../../database'

export default async function syncRoute(req, res) {
  try {
    await dispatch();
    res.send({ 
      success: true,
      message: 'Синхронизация базы данных прошла успешно'
    });
  } catch(err) {
    res.send({ 
      success: false,
      message: err.toString()
    });
  }
}

