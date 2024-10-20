import { Measurement } from "../../interfaces/RCPCHMeasurementObject"

export const beforeDueDateError:Measurement[] = [
    {
        "birth_data": {
            "birth_date": "2020-04-12",
            "gestation_weeks": 23,
            "gestation_days": 0,
            "estimated_date_delivery": "2020-08-09",
            "estimated_date_delivery_string": "Sun 09 August, 2020",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "2020-04-18",
            "chronological_decimal_age": 0.01642710472279261,
            "corrected_decimal_age": -0.30937713894592744,
            "chronological_calendar_age": "6 days",
            "corrected_calendar_age": null,
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 23,
                "corrected_gestation_days": 6
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 23+0 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": "The due date is after the observation date - a calendar age cannot be calculated."
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 45.0,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": null,
            "corrected_centile": null,
            "corrected_centile_band": null,
            "chronological_sds": -3.0300336248399846,
            "chronological_centile": 0.1,
            "chronological_centile_band": "This height measurement is below the normal range",
            "corrected_measurement_error": "UK-WHO length data does not exist in infants below 25 weeks gestation.",
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.01642710472279261,
                    "y": 45.0,
                    "b": null,
                    "centile": 0.1,
                    "sds": -3.0300336248399846,
                    "bone_age_label": "This bone age is advanced",
                    "events_text": [
                        "Growth hormone start",
                        "Growth Hormone Deficiency diagnosis"
                    ],
                    "bone_age_type": "greulich-pyle",
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "6 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is below the normal range",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.30937713894592744,
                    "y": 45.0,
                    "b": null,
                    "centile": null,
                    "sds": null,
                    "bone_age_label": "This bone age is advanced",
                    "events_text": [
                        "Growth hormone start",
                        "Growth Hormone Deficiency diagnosis"
                    ],
                    "bone_age_type": "greulich-pyle",
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "23 + 6 weeks",
                    "lay_comment": "Because your child was born at 23+0 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": null,
                    "observation_value_error": "UK-WHO length data does not exist in infants below 25 weeks gestation."
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.01642710472279261,
                    "y": -3.0300336248399846,
                    "b": null,
                    "centile": 0.1,
                    "sds": null,
                    "bone_age_label": "This bone age is advanced",
                    "events_text": [
                        "Growth hormone start",
                        "Growth Hormone Deficiency diagnosis"
                    ],
                    "bone_age_type": "greulich-pyle",
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "6 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is below the normal range",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.30937713894592744,
                    "y": null,
                    "b": null,
                    "centile": null,
                    "sds": null,
                    "bone_age_label": "This bone age is advanced",
                    "events_text": [
                        "Growth hormone start",
                        "Growth Hormone Deficiency diagnosis"
                    ],
                    "bone_age_type": "greulich-pyle",
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "23 + 6 weeks",
                    "lay_comment": "Because your child was born at 23+0 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": null,
                    "observation_value_error": "UK-WHO length data does not exist in infants below 25 weeks gestation."
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": "greulich-pyle",
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": "This bone age is advanced"
        },
        "events_data": {
            "events_text": [
                "Growth hormone start",
                "Growth Hormone Deficiency diagnosis"
            ]
        }
    }
]