import {UsersData} from "../redux/usersReducer";

export const updateObjectInArray = (items: UsersData[],
                                    itemId: number,
                                    objPropName: keyof UsersData,
                                    newObjProps: { followed: boolean }) => {
  return items.map(u => {
    if (u[objPropName] === itemId) {
      return {...u, ...newObjProps}
    }
    return u
  })
}