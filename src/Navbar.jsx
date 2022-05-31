import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    Image,
    Text,
    Heading,
    Icon
  } from '@chakra-ui/react';
  import { MoonIcon, SunIcon, DeleteIcon } from '@chakra-ui/icons';
  import { useRef } from 'react';
  import { FiShoppingCart } from 'react-icons/fi';
  
  const Navbar = ({cart, deleteProduct, deleteAllProducts, plusTotals}) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return (
      <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Flex alignItems='center'>
              <Image 
              src="https://ada-ejercicio-carrito.vercel.app/assets/iso_blanco.17632b29.svg"
              h="40px"
              mr='10px'
             ></Image>
              <Heading as='h4' size='md'>AdaShop</Heading>
            </Flex>
            <Flex>
              <Button>Inicio</Button>
              <Button>Producto</Button>
              <Button>Contacto</Button>
            </Flex>
  
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
                <Button ref={btnRef}  onClick={onOpen}>
                 <Icon as={FiShoppingCart} h={5} w={5} m='5px' alignSelf={'center'} /> ({cart.length})
                </Button>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
                <Drawer
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                  finalFocusRef={btnRef}
                  size='sm'
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Carrito</DrawerHeader>
  
                    <DrawerBody>
                          {cart.map(product=>{
                            return <Flex alignItems='flex-start' p='5px' justifyContent='space-around'>
                              <Image src={product.image}  boxSize='100px'/>
                              <Text boxSize='50%'>
                                  {product.title}
                                  <br/>
                                  ${product.price}
                                  <br/>
                                  {product.cantidad}
                              </Text> 
                              <DeleteIcon onClick={()=>deleteProduct(product)}/> 
                              </Flex>
                          })}    
                                             
                    </DrawerBody>
  
                    <DrawerFooter display='flex' flexDirection='column'>
                      <Text>
                        TOTAL $ {plusTotals(cart)}
                      </Text> 
                      <br/>
                      <Button rightIcon={<DeleteIcon/>} colorScheme='red' variant='outline' onClick={()=>deleteAllProducts()}>
                              Vaciar carrito
                      </Button>    
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </>
    );
  };
  
  export default Navbar;
  