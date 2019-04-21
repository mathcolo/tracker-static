import formatDistance from 'date-fns/distance_in_words_to_now';

const nl_status = (status) => {
  switch (status) {
    case 'IN_TRANSIT_TO':
      return ' headed to';
    case 'INCOMING_AT':
      return ' at ';
    case 'STOPPED_AT':
      return ' at ';
    default:
      return '';
  }
}

const nl_direction = (direction_id, line_name) => {
  if (line_name === 'Green') {
    return direction_id ? 'eastbound' : 'westbound';
  }
  else {
    return direction_id ? 'northbound' : 'southbound';
  }
}

const nl_distance = (time) => {
  return formatDistance(time, { addSuffix: true })
}

export { nl_status, nl_direction, nl_distance };