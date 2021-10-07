import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '../src/component/general/Link';

export default function About() {
  return (
    <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Stenson Simon
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button><br />
        <Link href="/contact/me" color="secondary">
          Contact me
        </Link>
    </Container>
  );
}
