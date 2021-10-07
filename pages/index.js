import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '../src/component/general/Link';

export default function Index() {
  return (
    <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Stenson Simon
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link><br />
        <Link href="/contact/me" color="secondary">
          Contact me
        </Link>
    </Container>
  );
}
