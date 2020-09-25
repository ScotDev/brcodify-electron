import React from 'react'

import { ThemeProvider, Text, Link } from '@chakra-ui/core'

export default function Credits() {
    return (
        <div className="credits">
            <Text fontSize="md" color="cyan.50">
                <Link href="https://github.com/ScotDev" isExternal>
                    Created by ScotDev </Link>
                 - powered by the
                <Link href="https://github.com/lindell/JsBarcode" isExternal
                > JsBarcode library from Johan Lindell</Link>
            </Text>
        </div>
    )
}
