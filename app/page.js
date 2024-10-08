import Image from "next/image";
import getStripe from "@/utils/get-stripe"
import { SignedIn, SignedOut,UserButton } from "@clerk/nextjs"
import { Button, Container, Typography,AppBar, Box, Toolbar, Grid} from "@mui/material";
import Head from 'next/head'


export default function Home() {
  return (

    <Container maxWidth={false}  // Disable default maxWidth behavior
    disableGutters  // Removes the default padding (gutters)
    sx={{ width: '100vw' }} >
      <Head>
        <title>AI Flashcards</title>
        <meta name ="description" content="Create flashcard's from your text"/>
      </Head>

      <AppBar position="static" >
        <toolbar>
          <Typography variant = "h6" style={{flexGrow: 1}}>Flashcard Saas</Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in" > Log in</Button>
            <Button color ="inherit" href = "/sign-up">Sign up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </toolbar>
      </AppBar>

      <Box sx={{
        textAlign: 'center',
        my: 4,

      }}>
        <Typography variant="h2" gutterBottom>Welcome to flashcard SAAS</Typography>
        <Typography variant = "h5" gutterBottom> 
          {' '}
          The easiest way to make flashcards
        </Typography>
        <Button variant ="contained" color ="primary" sx={{mt: 2}}>
          Get Started
        </Button>
      </Box>

      <Box sx={{my: 6}}>
        <Typography variant ="h4" gutterBottom>Features</Typography>
        <Grid container spacing ={4}>
          <Grid item xs={12} md={4}>
            <Typography variant ="h6" gutterBottom> Easy Text Input</Typography>
            <Typography>
              {' '}
              Simply input your text and let our software do the rest!</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant ="h6" gutterBottom> Smart Flashcard</Typography>
            <Typography>
              {' '}
              Our webapp integrates OPENAI to break down your text into concise flashcards,
              perfect for studying</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant ="h6" gutterBottom> Accessible Anywhere</Typography>
            <Typography>
              {' '}
              Access your flashcards from any device, at any time. Study on the go!</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{my: 6, textAlign: 'center'}}>
        <Typography variant="h4" gutterBottom>Pricing</Typography>
        <Grid container spacing ={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius:2,

            }}>
            <Typography variant ="h5" gutterBottom> Basic</Typography>
            <Typography variant ="h6" gutterBottom> $5 / month</Typography>
            <Typography>
              {' '}
              Access to basic flashcard features and limited storage
              </Typography>
              <Button variant="contained" color="primary" sx={{
                mt: 2
              }}>
                Choose basic
              </Button>
            </Box>

          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{
                    p: 3,
                    border: '1px solid',
                    borderColor: 'grey.300',
                    borderRadius:2,

                  }}>
                  <Typography variant ="h5" gutterBottom> Pro</Typography>
                  <Typography variant ="h6" gutterBottom> $10 / month</Typography>
                  <Typography>
                    {' '}
                    Unlimited flashcards and storage, with priority support.
                    </Typography>
                    <Button variant="contained" color="primary" sx={{
                      mt: 2
                    }}>
                      Choose Pro
                    </Button>
                  </Box>
                  </Grid>
              </Grid>
            </Box>
          
    </Container>
  )
}