import { Measurement } from "../../interfaces/RCPCHMeasurementObject";

export const prematureGirlOverFourHeight: Measurement[]=[
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 33,
            "gestation_days": 1,
            "estimated_date_delivery": "1759-05-29",
            "estimated_date_delivery_string": "Tue 29 May, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-04-11",
            "chronological_decimal_age": 0.0,
            "corrected_decimal_age": -0.13141683778234087,
            "chronological_calendar_age": "Happy Birthday",
            "corrected_calendar_age": null,
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 33,
                "corrected_gestation_days": 1
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": "The due date is after the observation date - a calendar age cannot be calculated."
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 51.9,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 3.5193085014915835,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": 1.018282547536866,
            "chronological_centile": 84.6,
            "chronological_centile_band": "This height measurement is between the 75th and 91st centiles.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.0,
                    "y": 51.9,
                    "b": null,
                    "centile": 84.6,
                    "sds": 1.018282547536866,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "Happy Birthday",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.13141683778234087,
                    "y": 51.9,
                    "b": null,
                    "centile": 100.0,
                    "sds": 3.5193085014915835,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "33 + 1 weeks",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.0,
                    "y": 1.018282547536866,
                    "b": null,
                    "centile": 84.6,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "Happy Birthday",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.13141683778234087,
                    "y": 3.5193085014915835,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "33 + 1 weeks",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 33,
            "gestation_days": 1,
            "estimated_date_delivery": "1759-05-29",
            "estimated_date_delivery_string": "Tue 29 May, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-08-10",
            "chronological_decimal_age": 0.33127994524298426,
            "corrected_decimal_age": 0.1998631074606434,
            "chronological_calendar_age": "3 months, 4 weeks and 2 days",
            "corrected_calendar_age": "2 months, 1 week and 5 days",
            "corrected_gestational_age": {
                "corrected_gestation_weeks": null,
                "corrected_gestation_days": null
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": null
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 64.3,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 2.9441576793247375,
            "corrected_centile": 99.8,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": 1.045541401865189,
            "chronological_centile": 85.2,
            "chronological_centile_band": "This height measurement is between the 75th and 91st centiles.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.33127994524298426,
                    "y": 64.3,
                    "b": null,
                    "centile": 85.2,
                    "sds": 1.045541401865189,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "3 months, 4 weeks and 2 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 0.1998631074606434,
                    "y": 64.3,
                    "b": null,
                    "centile": 99.8,
                    "sds": 2.9441576793247375,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "2 months, 1 week and 5 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.33127994524298426,
                    "y": 1.045541401865189,
                    "b": null,
                    "centile": 85.2,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "3 months, 4 weeks and 2 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 0.1998631074606434,
                    "y": 2.9441576793247375,
                    "b": null,
                    "centile": 99.8,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "2 months, 1 week and 5 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 33,
            "gestation_days": 1,
            "estimated_date_delivery": "1759-05-29",
            "estimated_date_delivery_string": "Tue 29 May, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-12-09",
            "chronological_decimal_age": 0.6625598904859685,
            "corrected_decimal_age": 0.5311430527036276,
            "chronological_calendar_age": "7 months and 4 weeks",
            "corrected_calendar_age": "6 months, 1 week and 3 days",
            "corrected_gestational_age": {
                "corrected_gestation_weeks": null,
                "corrected_gestation_days": null
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": null
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 71.1,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 2.089196003509204,
            "corrected_centile": 98.2,
            "corrected_centile_band": "This height measurement is on or near the 98th centile.",
            "chronological_sds": 1.0245221453278943,
            "chronological_centile": 84.7,
            "chronological_centile_band": "This height measurement is between the 75th and 91st centiles.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.6625598904859685,
                    "y": 71.1,
                    "b": null,
                    "centile": 84.7,
                    "sds": 1.0245221453278943,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "7 months and 4 weeks",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 0.5311430527036276,
                    "y": 71.1,
                    "b": null,
                    "centile": 98.2,
                    "sds": 2.089196003509204,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "6 months, 1 week and 3 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 98th centile.",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.6625598904859685,
                    "y": 1.0245221453278943,
                    "b": null,
                    "centile": 84.7,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "7 months and 4 weeks",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 0.5311430527036276,
                    "y": 2.089196003509204,
                    "b": null,
                    "centile": 98.2,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "6 months, 1 week and 3 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 98th centile.",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 33,
            "gestation_days": 1,
            "estimated_date_delivery": "1759-05-29",
            "estimated_date_delivery_string": "Tue 29 May, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1760-04-08",
            "chronological_decimal_age": 0.9938398357289527,
            "corrected_decimal_age": 0.8624229979466119,
            "chronological_calendar_age": "11 months and 4 weeks",
            "corrected_calendar_age": "10 months, 1 week and 3 days",
            "corrected_gestational_age": {
                "corrected_gestation_weeks": null,
                "corrected_gestation_days": null
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": null
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 76.6,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 1.8756236471730483,
            "corrected_centile": 97.0,
            "corrected_centile_band": "This height measurement is on or near the 98th centile.",
            "chronological_sds": 1.0406623910922144,
            "chronological_centile": 85.1,
            "chronological_centile_band": "This height measurement is between the 75th and 91st centiles.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.9938398357289527,
                    "y": 76.6,
                    "b": null,
                    "centile": 85.1,
                    "sds": 1.0406623910922144,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "11 months and 4 weeks",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 0.8624229979466119,
                    "y": 76.6,
                    "b": null,
                    "centile": 97.0,
                    "sds": 1.8756236471730483,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "10 months, 1 week and 3 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 98th centile.",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.9938398357289527,
                    "y": 1.0406623910922144,
                    "b": null,
                    "centile": 85.1,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "11 months and 4 weeks",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 0.8624229979466119,
                    "y": 1.8756236471730483,
                    "b": null,
                    "centile": 97.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "10 months, 1 week and 3 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 98th centile.",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 33,
            "gestation_days": 1,
            "estimated_date_delivery": "1759-05-29",
            "estimated_date_delivery_string": "Tue 29 May, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1760-08-07",
            "chronological_decimal_age": 1.325119780971937,
            "corrected_decimal_age": 1.1937029431895962,
            "chronological_calendar_age": "1 year, 3 months, 3 weeks and 6 days",
            "corrected_calendar_age": "1 year, 2 months, 1 week and 2 days",
            "corrected_gestational_age": {
                "corrected_gestation_weeks": null,
                "corrected_gestation_days": null
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": null
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 81.4,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 1.7204570324108464,
            "corrected_centile": 95.7,
            "corrected_centile_band": "This height measurement is between the 91st and 98th centiles.",
            "chronological_sds": 1.0401969811144558,
            "chronological_centile": 85.1,
            "chronological_centile_band": "This height measurement is between the 75th and 91st centiles.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 1.325119780971937,
                    "y": 81.4,
                    "b": null,
                    "centile": 85.1,
                    "sds": 1.0401969811144558,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 year, 3 months, 3 weeks and 6 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 1.1937029431895962,
                    "y": 81.4,
                    "b": null,
                    "centile": 95.7,
                    "sds": 1.7204570324108464,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "1 year, 2 months, 1 week and 2 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 91st and 98th centiles.",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 1.325119780971937,
                    "y": 1.0401969811144558,
                    "b": null,
                    "centile": 85.1,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 year, 3 months, 3 weeks and 6 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 1.1937029431895962,
                    "y": 1.7204570324108464,
                    "b": null,
                    "centile": 95.7,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "1 year, 2 months, 1 week and 2 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 91st and 98th centiles.",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 33,
            "gestation_days": 1,
            "estimated_date_delivery": "1759-05-29",
            "estimated_date_delivery_string": "Tue 29 May, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1760-12-06",
            "chronological_decimal_age": 1.6563997262149213,
            "corrected_decimal_age": 1.5249828884325805,
            "chronological_calendar_age": "1 year, 7 months, 3 weeks and 4 days",
            "corrected_calendar_age": "1 year, 6 months and 1 week",
            "corrected_gestational_age": {
                "corrected_gestation_weeks": null,
                "corrected_gestation_days": null
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": null
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 85.7,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 1.6048721877485435,
            "corrected_centile": 94.6,
            "corrected_centile_band": "This height measurement is between the 91st and 98th centiles.",
            "chronological_sds": 1.036705836646904,
            "chronological_centile": 85.0,
            "chronological_centile_band": "This height measurement is between the 75th and 91st centiles.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 1.6563997262149213,
                    "y": 85.7,
                    "b": null,
                    "centile": 85.0,
                    "sds": 1.036705836646904,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 year, 7 months, 3 weeks and 4 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 1.5249828884325805,
                    "y": 85.7,
                    "b": null,
                    "centile": 94.6,
                    "sds": 1.6048721877485435,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "1 year, 6 months and 1 week",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 91st and 98th centiles.",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 1.6563997262149213,
                    "y": 1.036705836646904,
                    "b": null,
                    "centile": 85.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 year, 7 months, 3 weeks and 4 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 1.5249828884325805,
                    "y": 1.6048721877485435,
                    "b": null,
                    "centile": 94.6,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "1 year, 6 months and 1 week",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 91st and 98th centiles.",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 33,
            "gestation_days": 1,
            "estimated_date_delivery": "1759-05-29",
            "estimated_date_delivery_string": "Tue 29 May, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1761-04-06",
            "chronological_decimal_age": 1.9876796714579055,
            "corrected_decimal_age": 1.8562628336755647,
            "chronological_calendar_age": "1 year, 11 months, 3 weeks and 5 days",
            "corrected_calendar_age": "1 year, 10 months, 1 week and 1 day",
            "corrected_gestational_age": {
                "corrected_gestation_weeks": null,
                "corrected_gestation_days": null
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": null
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 89.7,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 1.5444617824851088,
            "corrected_centile": 93.9,
            "corrected_centile_band": "This height measurement is between the 91st and 98th centiles.",
            "chronological_sds": 1.0615629274118485,
            "chronological_centile": 85.6,
            "chronological_centile_band": "This height measurement is between the 75th and 91st centiles.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 1.9876796714579055,
                    "y": 89.7,
                    "b": null,
                    "centile": 85.6,
                    "sds": 1.0615629274118485,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 year, 11 months, 3 weeks and 5 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 1.8562628336755647,
                    "y": 89.7,
                    "b": null,
                    "centile": 93.9,
                    "sds": 1.5444617824851088,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "1 year, 10 months, 1 week and 1 day",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 91st and 98th centiles.",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 1.9876796714579055,
                    "y": 1.0615629274118485,
                    "b": null,
                    "centile": 85.6,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 year, 11 months, 3 weeks and 5 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 1.8562628336755647,
                    "y": 1.5444617824851088,
                    "b": null,
                    "centile": 93.9,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "1 year, 10 months, 1 week and 1 day",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 91st and 98th centiles.",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 33,
            "gestation_days": 1,
            "estimated_date_delivery": "1759-05-29",
            "estimated_date_delivery_string": "Tue 29 May, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1761-08-05",
            "chronological_decimal_age": 2.31895961670089,
            "corrected_decimal_age": 2.187542778918549,
            "chronological_calendar_age": "2 years, 3 months, 3 weeks and 4 days",
            "corrected_calendar_age": "2 years, 2 months and 1 week",
            "corrected_gestational_age": {
                "corrected_gestation_weeks": null,
                "corrected_gestation_days": null
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": null
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 92.6,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 1.47848232999836,
            "corrected_centile": 93.0,
            "corrected_centile_band": "This height measurement is on or near the 91st centile.",
            "chronological_sds": 1.063270058732607,
            "chronological_centile": 85.6,
            "chronological_centile_band": "This height measurement is between the 75th and 91st centiles.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 2.31895961670089,
                    "y": 92.6,
                    "b": null,
                    "centile": 85.6,
                    "sds": 1.063270058732607,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 years, 3 months, 3 weeks and 4 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 2.187542778918549,
                    "y": 92.6,
                    "b": null,
                    "centile": 93.0,
                    "sds": 1.47848232999836,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "2 years, 2 months and 1 week",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 91st centile.",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 2.31895961670089,
                    "y": 1.063270058732607,
                    "b": null,
                    "centile": 85.6,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 years, 3 months, 3 weeks and 4 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 2.187542778918549,
                    "y": 1.47848232999836,
                    "b": null,
                    "centile": 93.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "2 years, 2 months and 1 week",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 91st centile.",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 33,
            "gestation_days": 1,
            "estimated_date_delivery": "1759-05-29",
            "estimated_date_delivery_string": "Tue 29 May, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1761-12-04",
            "chronological_decimal_age": 2.650239561943874,
            "corrected_decimal_age": 2.518822724161533,
            "chronological_calendar_age": "2 years, 7 months, 3 weeks and 2 days",
            "corrected_calendar_age": "2 years, 6 months and 5 days",
            "corrected_gestational_age": {
                "corrected_gestation_weeks": null,
                "corrected_gestation_days": null
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": null
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 95.9,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 1.425111930298132,
            "corrected_centile": 92.3,
            "corrected_centile_band": "This height measurement is on or near the 91st centile.",
            "chronological_sds": 1.066105972045275,
            "chronological_centile": 85.7,
            "chronological_centile_band": "This height measurement is between the 75th and 91st centiles.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 2.650239561943874,
                    "y": 95.9,
                    "b": null,
                    "centile": 85.7,
                    "sds": 1.066105972045275,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 years, 7 months, 3 weeks and 2 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 2.518822724161533,
                    "y": 95.9,
                    "b": null,
                    "centile": 92.3,
                    "sds": 1.425111930298132,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "2 years, 6 months and 5 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 91st centile.",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 2.650239561943874,
                    "y": 1.066105972045275,
                    "b": null,
                    "centile": 85.7,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 years, 7 months, 3 weeks and 2 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 2.518822724161533,
                    "y": 1.425111930298132,
                    "b": null,
                    "centile": 92.3,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "2 years, 6 months and 5 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 91st centile.",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 33,
            "gestation_days": 1,
            "estimated_date_delivery": "1759-05-29",
            "estimated_date_delivery_string": "Tue 29 May, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1762-04-04",
            "chronological_decimal_age": 2.9815195071868583,
            "corrected_decimal_age": 2.8501026694045173,
            "chronological_calendar_age": "2 years, 11 months, 3 weeks and 3 days",
            "corrected_calendar_age": "2 years, 10 months and 6 days",
            "corrected_gestational_age": {
                "corrected_gestation_weeks": null,
                "corrected_gestation_days": null
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": null
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 98.9,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 1.3713326497242362,
            "corrected_centile": 91.5,
            "corrected_centile_band": "This height measurement is on or near the 91st centile.",
            "chronological_sds": 1.0538327807181609,
            "chronological_centile": 85.4,
            "chronological_centile_band": "This height measurement is between the 75th and 91st centiles.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 2.9815195071868583,
                    "y": 98.9,
                    "b": null,
                    "centile": 85.4,
                    "sds": 1.0538327807181609,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 years, 11 months, 3 weeks and 3 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 2.8501026694045173,
                    "y": 98.9,
                    "b": null,
                    "centile": 91.5,
                    "sds": 1.3713326497242362,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "2 years, 10 months and 6 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 91st centile.",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 2.9815195071868583,
                    "y": 1.0538327807181609,
                    "b": null,
                    "centile": 85.4,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 years, 11 months, 3 weeks and 3 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 2.8501026694045173,
                    "y": 1.3713326497242362,
                    "b": null,
                    "centile": 91.5,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "2 years, 10 months and 6 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 91st centile.",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 33,
            "gestation_days": 1,
            "estimated_date_delivery": "1759-05-29",
            "estimated_date_delivery_string": "Tue 29 May, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1762-08-03",
            "chronological_decimal_age": 3.3127994524298425,
            "corrected_decimal_age": 3.1813826146475015,
            "chronological_calendar_age": "3 years, 3 months, 3 weeks and 2 days",
            "corrected_calendar_age": "3 years, 2 months and 5 days",
            "corrected_gestational_age": {
                "corrected_gestation_weeks": null,
                "corrected_gestation_days": null
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": null
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 101.8,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 1.347991469414639,
            "corrected_centile": 91.1,
            "corrected_centile_band": "This height measurement is on or near the 91st centile.",
            "chronological_sds": 1.0609004841507517,
            "chronological_centile": 85.6,
            "chronological_centile_band": "This height measurement is between the 75th and 91st centiles.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 3.3127994524298425,
                    "y": 101.8,
                    "b": null,
                    "centile": 85.6,
                    "sds": 1.0609004841507517,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "3 years, 3 months, 3 weeks and 2 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 3.1813826146475015,
                    "y": 101.8,
                    "b": null,
                    "centile": 91.1,
                    "sds": 1.347991469414639,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "3 years, 2 months and 5 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 91st centile.",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 3.3127994524298425,
                    "y": 1.0609004841507517,
                    "b": null,
                    "centile": 85.6,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "3 years, 3 months, 3 weeks and 2 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 3.1813826146475015,
                    "y": 1.347991469414639,
                    "b": null,
                    "centile": 91.1,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "3 years, 2 months and 5 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 91st centile.",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 33,
            "gestation_days": 1,
            "estimated_date_delivery": "1759-05-29",
            "estimated_date_delivery_string": "Tue 29 May, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1762-12-02",
            "chronological_decimal_age": 3.6440793976728267,
            "corrected_decimal_age": 3.512662559890486,
            "chronological_calendar_age": "3 years, 7 months and 3 weeks",
            "corrected_calendar_age": "3 years, 6 months and 3 days",
            "corrected_gestational_age": {
                "corrected_gestation_weeks": null,
                "corrected_gestation_days": null
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": null
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 104.5,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 1.3158438381210076,
            "corrected_centile": 90.6,
            "corrected_centile_band": "This height measurement is on or near the 91st centile.",
            "chronological_sds": 1.0547660378390498,
            "chronological_centile": 85.4,
            "chronological_centile_band": "This height measurement is between the 75th and 91st centiles.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 3.6440793976728267,
                    "y": 104.5,
                    "b": null,
                    "centile": 85.4,
                    "sds": 1.0547660378390498,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "3 years, 7 months and 3 weeks",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 3.512662559890486,
                    "y": 104.5,
                    "b": null,
                    "centile": 90.6,
                    "sds": 1.3158438381210076,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "3 years, 6 months and 3 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 91st centile.",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 3.6440793976728267,
                    "y": 1.0547660378390498,
                    "b": null,
                    "centile": 85.4,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "3 years, 7 months and 3 weeks",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 3.512662559890486,
                    "y": 1.3158438381210076,
                    "b": null,
                    "centile": 90.6,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "3 years, 6 months and 3 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 91st centile.",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 33,
            "gestation_days": 1,
            "estimated_date_delivery": "1759-05-29",
            "estimated_date_delivery_string": "Tue 29 May, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1763-04-02",
            "chronological_decimal_age": 3.975359342915811,
            "corrected_decimal_age": 3.8439425051334704,
            "chronological_calendar_age": "3 years, 11 months, 3 weeks and 1 day",
            "corrected_calendar_age": "3 years, 10 months and 4 days",
            "corrected_gestational_age": {
                "corrected_gestation_weeks": null,
                "corrected_gestation_days": null
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": null
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 105.7,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 0.9660311082671635,
            "corrected_centile": 83.3,
            "corrected_centile_band": "This height measurement is between the 75th and 91st centiles.",
            "chronological_sds": 0.7320462592109017,
            "chronological_centile": 76.8,
            "chronological_centile_band": "This height measurement is on or near the 75th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 3.975359342915811,
                    "y": 105.7,
                    "b": null,
                    "centile": 76.8,
                    "sds": 0.7320462592109017,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "3 years, 11 months, 3 weeks and 1 day",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 75th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 3.8439425051334704,
                    "y": 105.7,
                    "b": null,
                    "centile": 83.3,
                    "sds": 0.9660311082671635,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "3 years, 10 months and 4 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 3.975359342915811,
                    "y": 0.7320462592109017,
                    "b": null,
                    "centile": 76.8,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "3 years, 11 months, 3 weeks and 1 day",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 75th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 3.8439425051334704,
                    "y": 0.9660311082671635,
                    "b": null,
                    "centile": 83.3,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "3 years, 10 months and 4 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 33,
            "gestation_days": 1,
            "estimated_date_delivery": "1759-05-29",
            "estimated_date_delivery_string": "Tue 29 May, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1763-08-01",
            "chronological_decimal_age": 4.306639288158795,
            "corrected_decimal_age": 4.175222450376454,
            "chronological_calendar_age": "4 years, 3 months and 3 weeks",
            "corrected_calendar_age": "4 years, 2 months and 3 days",
            "corrected_gestational_age": {
                "corrected_gestation_weeks": null,
                "corrected_gestation_days": null
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": null
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 108.2,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 1.322803724255717,
            "corrected_centile": 90.7,
            "corrected_centile_band": "This height measurement is on or near the 91st centile.",
            "chronological_sds": 1.0774150228622907,
            "chronological_centile": 85.9,
            "chronological_centile_band": "This height measurement is between the 75th and 91st centiles.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 4.306639288158795,
                    "y": 108.2,
                    "b": null,
                    "centile": 85.9,
                    "sds": 1.0774150228622907,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "4 years, 3 months and 3 weeks",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 4.175222450376454,
                    "y": 108.2,
                    "b": null,
                    "centile": 90.7,
                    "sds": 1.322803724255717,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "4 years, 2 months and 3 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 91st centile.",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 4.306639288158795,
                    "y": 1.0774150228622907,
                    "b": null,
                    "centile": 85.9,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "4 years, 3 months and 3 weeks",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is between the 75th and 91st centiles.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 4.175222450376454,
                    "y": 1.322803724255717,
                    "b": null,
                    "centile": 90.7,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "4 years, 2 months and 3 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 33+1 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 91st centile.",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    }
]