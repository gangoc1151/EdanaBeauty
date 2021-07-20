import index from '../Configs/index'

export const GetUser = async (key) => {
   const check = await index.get('page/get_username/', { params: { key: key } })
    return check;

}