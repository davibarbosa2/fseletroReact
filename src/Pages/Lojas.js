import  {  Row,  Container ,ListGroup }  from  'react-bootstrap' ;

export default function Lojas(){
    return(

    <Container>
    <Row>
    <ListGroup>
      <ul class="list-group">
         <li class="list-group-item list-group-item-primary">Rio de Janeiro</li>
         <li class="list-group-item">Rua Antenor Rodrigues,33</li>
         <li class="list-group-item">7 &ordm; andar</li>
         <li class="list-group-item">São Gonçalo</li>
         <li class="list-group-item">(21)3333-4444</li>
      </ul>
      </ListGroup>
      <ListGroup>
      <ul class="list-group">
         <li class="list-group-item list-group-item-primary">São Paulo</li>
         <li class="list-group-item">Avenida Paulista</li>
         <li class="list-group-item">2 &ordm; andar</li>
         <li class="list-group-item">Centro</li>
         <li class="list-group-item">(21) 3333-3333</li>
      </ul>
      </ListGroup>
      <ListGroup>
      <ul class="list-group">
         <li class="list-group-item list-group-item-primary">Belo Horizonte</li>
         <li class="list-group-item">Lagoa da Pampulha</li>
         <li class="list-group-item">1 &ordm; andar</li>
         <li class="list-group-item">Pampulha</li>
         <li class="list-group-item">(21)1111-1111</li>
      </ul>
    </ListGroup>  
    <ListGroup>
      <ul class="list-group">
         <li class="list-group-item list-group-item-primary">Curitiba</li>
         <li class="list-group-item">Av Das Graças</li>
         <li class="list-group-item">2 &ordm; andar</li>
         <li class="list-group-item">Santo Amaro</li>
         <li class="list-group-item">(21)6666-4444</li>
      </ul>
    </ListGroup> 
    </Row>
    </Container>
    )
}    
