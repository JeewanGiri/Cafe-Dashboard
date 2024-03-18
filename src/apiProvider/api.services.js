
export const apiRequest =async(axiosPrivate,{...body})=>{
    const data=await axiosPrivate(body);
    return data;
};
