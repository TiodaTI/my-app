import { Button } from "react-native"

type MoreButtonProps = {
    title: string
}

const MoreButton = ({title}: MoreButtonProps)  =>{
    return (
        <Button 
            title={title}
        />
    )
}

export default MoreButton