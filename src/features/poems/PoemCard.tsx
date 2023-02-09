import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


interface Props{
    poem: string
    author: string
}

const PoemCard = ({ poem, author }: Props) => {
  return (
    <Card sx={{ minWidth: 275, marginTop: 3}}>
      <CardContent>
        <Typography variant="body2">
          {poem}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {author}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PoemCard;
