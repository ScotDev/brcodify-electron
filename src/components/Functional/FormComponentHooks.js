import React, { useState, useEffect } from 'react';

import Barcode from "react-hooks-barcode";
import FileSaver from 'file-saver';


import { Text, Stack, Button, ButtonGroup, Box, Input, Select, Flex, PseudoBox } from '@chakra-ui/core'

export default function FormComponentHooks() {

    const [format, setformat] = useState("CODE128")
    const [barcodeValue, setbarcodeValue] = useState("EXAMPLE CODE 12345")
    const [message, setMessage] = useState(null);

    const auto = '(Auto)';
    const CODE128 = 'CODE128';
    const CODE39 = 'CODE39';
    const CODE128A = 'CODE128A';
    const CODE128B = 'CODE128B';
    const CODE128C = 'CODE128C';
    const defaultValue = 'EXAMPLE CODE 12345';
    // ITF14 requires input validation for exactly 13 numbers only (14th is calculated checksum)
    const ITF14 = 'ITF14';
    // MSI requires a check on input for digits only between 0-9
    // const MSI = 'MSI'
    // const MSI = 'MSI10'
    // const MSI = 'MSI11'
    // const MSI = 'MSI1010'

    const downloadBarcode = () => {
        // const generatedSvg = window.getElementById('barcode');
        // const img = generatedSvg.toDataURL('image/png');
        // FileSaver.saveAs(img, barcodeValue, { type: "image/png" })
        alert("download")
    }

    const handleChange = () => {
        // e.preventDefault();
        if (barcodeValue > 50) {
            setbarcodeValue(defaultValue)
            setMessage("Value cannot be lonfer than 50 characters");
            // this.setState({ BarcodeExists: false, barcodeValue: defaultValue, input: defaultValue, showWarning: true, errorMsg: 'Code cannot be longer than 50 characters' })
        }
    }


    useEffect(
        () => {
            handleChange()
            if (!barcodeValue) {
                setMessage("Please enter a value");
            } else setMessage(null);
        },
        [barcodeValue]
    );
    // useEffect(
    //     () => {
    //         setMessage(`Format changed to ${format}`);

    //     },
    //     [format]
    // );


    return (
        <Box p={4} display="flex" alignItems="center" justifyContent="center" flexDirection="column">

            <Flex as="form" w="100%" display="flex" alignItems="center" flexDirection="column">
                <PseudoBox w="80%" mb={10} p={4} display="flex" alignItems="center" justifyContent="space-between" flexDirection="column" border="2px" borderRadius="md" borderColor="cyan.50">
                    <Stack spacing={4} w="100%">
                        <Input

                            focusBorderColor="pink.500"
                            bg="cyan.50"
                            variant="outline"
                            size="lg"
                            type="text"
                            name="input"
                            placeholder="Example code 12345"
                            autoFocus
                            autoComplete="off"
                            maxLength="50"
                            onChange={e => {
                                setbarcodeValue(e.target.value)
                            }}
                        />
                        <Select name="format" placeholder="Select barcode type" variant="outline" focusBorderColor="pink.500" bg="cyan.50" size="lg" onChange={e => { setformat(e.target.value) }}>

                            <optgroup label='CODE128 Series'>
                                <option value={CODE128}>{CODE128} {auto}</option>
                                <option value={CODE128A}>{CODE128A}</option>
                                <option value={CODE128B}>{CODE128B}</option>
                                {/* <option value={CODE128C}>{CODE128C}</option> */}
                            </optgroup>
                            <optgroup label='CODE39 Series'>
                                <option value={CODE39}>{CODE39}</option>
                            </optgroup>
                            {/* <optgroup label='ITF-14 Series'>
                                <option value={ITF14}>{ITF14}</option>
                            </optgroup> */}
                        </Select>
                    </Stack>

                    {message && (<Text id="warning" color="red.500" fontSize="md">{message}</Text>)}
                    <Button mt={6} size="lg" bg="pink.500" color="cyan.50" rounded="md">Generate</Button>
                </PseudoBox>
            </Flex>


            <PseudoBox border="1px" borderRadius="md" borderColor="gray.200" mb={10} maxWidth="95%" overflow="hidden" p={2}>
                <Barcode value={barcodeValue} format={format} id="barcode" />
            </PseudoBox>

            <ButtonGroup spacing={4} mb={10}>
                <Button bg="pink.500" size="lg" color="cyan.50">Print</Button>
                <Button bg="pink.500" size="lg" color="cyan.50" onClick={() => { downloadBarcode() }}>Download</Button>
            </ButtonGroup>


        </Box>
    )
}
