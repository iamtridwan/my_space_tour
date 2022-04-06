import React from 'react'

import {Flex, Image} from "@chakra-ui/react";

type Props = {
    img: string,
    title: string,
    description: string,
    distance: string,
    time: string,
}

const TabPanelsContent = ( Props: Props) => {
  return (
    <Flex>
        <Image src={Props.img} alt={Props.title} />
        
    </Flex>
  )
}

export default TabPanelsContent