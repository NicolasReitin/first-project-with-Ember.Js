import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

// const qui reprend le début de l'URL fixe
const GEOAPIFY_API = 'https://maps.geoapify.com/v1/staticmap?style=osm-bright';

export default class MapComponent extends Component {
  get src() {
    // on reconstruit l'URL par petit bout avec les arguments
    let { width, height, lon, lat, zoom } = this.args;

    let dimensions = `&width=${width}&height=${height}`;
    let coordinates = `&center=lonlat:${lon},${lat}&zoom=${zoom}`;
    let accessToken = `&apiKey=${this.token}`;

    // on retourne l'URL par petit bout avec les arguments
    return `${GEOAPIFY_API}${dimensions}${coordinates}${accessToken}`;
  }

  get token() {
    return encodeURIComponent(ENV.GEOAPIFY_ACCESS_TOKEN);
  }
}
