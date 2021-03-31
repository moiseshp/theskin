import { skinNameState } from 'store/skin/atoms'
import { useRecoilState } from 'recoil'
import { useStyles } from './TshirtName.styles'
import 'fonts/croatia/NikeCroatia2020.css'

const TshirtName = () => {
  const [name] = useRecoilState(skinNameState)
  const classes = useStyles()
  return (
    <main className={classes.root}>
      {name}
    </main>
  )
}

export default TshirtName
