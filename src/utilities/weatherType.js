/**
 * file that holds icons. weather condition descriptions & background-color data
 * This is in referenece to the response received from the API
 * Check out https://openweathermap.org/weather-conditions
 */
export const weatherType = {
  Thunderstorm: {
    icon: 'zap',
    message: 'It could get noisy',
    background: '#000000'
  },
  Drizzle: {
    icon: 'cloud-rain',
    message: 'light intensity drizzle',
    background: '#36454f'
  },
  Rain: {
    icon: 'umbrella',
    message: 'You will need an umbrella',
    background: '#0000ff'
  },
  Snow: {
    icon: 'cloud-snow',
    message: 'Lets build a snowman',
    background: '#7f6065'
  },
  Clear: {
    icon: 'sun',
    message: 'Perfect T-shirt weather',
    background: '#e47200'
  },
  Clouds: {
    icon: 'cloud',
    message: 'You could live in the clouds',
    background: '#363636'
  },
  Haze: {
    icon: 'wind',
    message: 'It might get damp',
    background: '#58586e'
  },
  Mist: {
    icon: 'align-justify',
    message: 'Vision could be obscured',
    background: '#3e3e37'
  }
}