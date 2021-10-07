import * as React from 'react';
import { Container, Typography, Button } from '@mui/material';
import Link from '../../src/component/general/Link';

export default function ContactMe() {
  return (
    <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Stenson Simon
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link><br />
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
    </Container>
  );
}
