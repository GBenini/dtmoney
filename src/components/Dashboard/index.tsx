import { Container } from "./styles";

import { Summary } from "../Summary";

import { TransacitionTable } from "../TransactionsTable";

export function Dashboard(){
    return(
      <Container>
        <Summary />
        <TransacitionTable />
      </Container>
    );
}