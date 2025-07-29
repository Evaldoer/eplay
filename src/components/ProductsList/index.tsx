import { parseToBrl } from '../../utils'
import Loader from '../Loader'
import Product from '../Product'
import * as S from './styles'
import { Game } from '../../types'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean
}

const ProductsList = ({ background, title, games, id, isLoading }: Props) => {
  const getGameTags = (game: Game): string[] => {
    const tags: string[] = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
          {games && games.length > 0 ? (
            games.map((game) => (
              <li key={game.id}>
                <Product
                  id={Number(game.id)}
                  category={game.details?.category || ''}
                  description={game.description || ''}
                  image={game.media?.thumbnail || game.media?.cover || ''}
                  infos={getGameTags(game)}
                  system={game.details?.system || ''}
                  title={game.name}
                />
              </li>
            ))
          ) : (
            <p>Nenhum produto encontrado.</p>
          )}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
