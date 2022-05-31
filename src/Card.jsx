import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Button,
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import {StarIcon, NotAllowedIcon} from '@chakra-ui/icons';
  import { FiShoppingCart } from 'react-icons/fi';


  const prueba = { 
    id: 1, 
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", 
    price: 109.95, 
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", 
    category: "men's clothing", 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80", 
    isNew: true, 
    } 
  
    
  
 const Card =({products, addProduct,toogleProductFav})=> {
    return (
      <Flex p={50} w="full" flexDirection="row"  maxW="400px" >
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          w="100%"
          >
          {products.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}
          <Box>
            <Image
              src={products.image}
              alt={`Picture of ${products.title}`}
              roundedTop="lg"
              h="200px"
              m="10px auto"
            />
          </Box>
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {products.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {products.title}
              </Box>

            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                  $
                </Box>
                {products.price.toFixed(2)}
              </Box>
              
            </Flex>
          </Box>
          <Flex alignItems='center' justifyContent='space-between'>
          <Tooltip
                label="Agregar al carrito"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <Button display='flex' onClick={()=>addProduct(products)} alignItems='center' m='10px' size='lg' colorScheme='blue'>
                  Agregar <Icon as={FiShoppingCart} h={7} w={7} m='5px' alignSelf={'center'} />
                </Button>
              </Tooltip>
              <Button size='lg' m='10px' onClick={()=>toogleProductFav(products)}> {products.fav?<StarIcon/>:<NotAllowedIcon/>}</Button>   
              </Flex>     
        </Box>
      </Flex>
    );
  }
  
  export default Card;
  